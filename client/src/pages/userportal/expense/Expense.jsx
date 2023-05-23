import React, { useEffect } from "react";
import "./expense.scss";
import Sidebar from "../sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  allExpense,
  addExpense,
  deleteExpense,
  clearErrors,
} from "../../../redux/actions/expenseAction";
import { allCategory } from "../../../redux/actions/categoryAction";
import { expenseConfig } from "./expenseConfig";
import Button from "../../../components/button/Button";
import CardTile from "../../../components/cardTile/CardTile";
import Spinner from "../../../components/spinner/Spinner";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
const Expense = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { expenses, loading } = useSelector((state) => state.expense);
  const { expense } = useSelector((state) => state.addExpense);
  const { userInfo } = useSelector((state) => state.user);
  const { category } = useSelector((state) => state.category);
  const { expense: deletedExpense } = useSelector(
    (state) => state.deleteExpense
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleExpenseForm = (data) => {
    const expenseData = {
      amount: data.amount,
      detail: data.detail,
      category_id: data.category_id,
    };
    dispatch(addExpense(expenseData));
    if (!expense?.error) {
      toast("Expense Added");
      navigate(0);
    }
  };
  const handleDeleteExpense = (id) => {
    if (window.confirm("Do you want to delete?")) {
      dispatch(deleteExpense(id));
    }
    if (!deletedExpense?.error) {
      toast("Delete Successfully");
    }
    setTimeout(() => {
      navigate(0);
    }, 1000);
  };
  useEffect(() => {
    if (expense?.error) {
      toast.error(expense?.error);
      dispatch(clearErrors());
    }
    dispatch(allExpense());
    dispatch(allCategory());
  }, []);
  const handleFilter = (data) => {
    console.log(data);
  };
  return (
    <div className="expense">
      <ToastContainer position="top-right" autoClose={1000} theme="dark" />
      <Sidebar />
      <div className="expense__container">
        <div className="addExpense__section">
          <h1 className="addExpense__title">ADD EXPENSE</h1>
          <form
            onSubmit={handleSubmit(handleExpenseForm)}
            className="addExpense__form"
          >
            <div className="form-field">
              <label htmlFor="amount">Expense</label>
              <input
                type="number"
                name="amount"
                placeholder="Expense Amount"
                {...register("amount", expenseConfig.amount)}
              />
              {errors?.amount && <p>{errors.amount.message}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="detail">Detail</label>
              <textarea
                rows={5}
                cols={30}
                type="text"
                name="detail"
                placeholder="Expense Detail"
                {...register("detail", expenseConfig.detail)}
              />
              {errors?.detail && <p>{errors.detail.message}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="category">Expense Category</label>
              <select
                type="text"
                name="category"
                placeholder="Category"
                {...register("category_id", expenseConfig.category_id)}
              >
                {category?.data &&
                  category.data.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
              {errors?.category_id && <p>{errors.category_id.message}</p>}
            </div>
            <div className="addExpense__button">
              <Button type="submit" theme="button">
                ADD
              </Button>
            </div>
          </form>
        </div>
        <div className="expenseList__section">
          <h1 className="expenseList__title">
            {userInfo?.data.username}&apos;s Expenditure list
          </h1>
          <div className="expenseList__filter">
            <div className="form-field">
              <label htmlFor="category">Expense Category</label>
              <select type="text" name="category" placeholder="Category">
                {category?.data &&
                  category.data.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="addExpense__button">
              <Button onClick={handleFilter} theme="button">
                FILTER
              </Button>
            </div>
          </div>
          {loading && <Spinner />}
          {expenses?.data?.length === 0 ? (
            <p>No list yet</p>
          ) : (
            <>
              {!loading &&
                expenses &&
                expenses?.data?.map((item) => {
                  return (
                    <CardTile
                      key={item.id}
                      id={item.id}
                      amount={item.amount}
                      detail={item.detail}
                      date={item.created_at}
                      categoryName={item.name}
                      handleDelete={handleDeleteExpense}
                    />
                  );
                })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expense;
