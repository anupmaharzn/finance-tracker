import React, { useEffect } from "react";
import "./income.scss";
import Sidebar from "../sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  allIncome,
  addIncome,
  deleteIncome,
  clearErrors,
} from "../../../redux/actions/incomeAction";
import { incomeConfig } from "./incomeConfig";
import Button from "../../../components/button/Button";
import CardTile from "../../../components/cardTile/CardTile";
import Spinner from "../../../components/spinner/Spinner";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
const Income = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { incomes, loading } = useSelector((state) => state.income);
  const { income } = useSelector((state) => state.addIncome);
  const { userInfo } = useSelector((state) => state.user);
  const { income: deletedIncome } = useSelector((state) => state.deleteIncome);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleIncomeForm = (data) => {
    console.log(data);
    const incomeData = {
      amount: data.amount,
      detail: data.detail,
    };
    dispatch(addIncome(incomeData));
    if (!income?.error) {
      toast("Income Added");
      navigate(0);
    }
  };
  const handleDeleteIncome = (id) => {
    if (window.confirm("Do you want to delete?")) {
      dispatch(deleteIncome(id));
    }
    if (!deletedIncome?.error) {
      toast("Delete Successfully");
    }
    setTimeout(() => {
      navigate(0);
    }, 1000);
  };
  useEffect(() => {
    if (income?.error) {
      toast.error(income?.error);
      dispatch(clearErrors());
    }
    dispatch(allIncome());
  }, []);
  return (
    <div className="income">
      <ToastContainer position="top-right" autoClose={1000} theme="dark" />
      <Sidebar />
      <div className="income__container">
        <div className="addIncome__section">
          <h1 className="addIncome__title">Add Income</h1>
          <form
            onSubmit={handleSubmit(handleIncomeForm)}
            className="addIncome__form"
          >
            <div className="form-field">
              <label htmlFor="amount">Income</label>
              <input
                type="number"
                name="amount"
                placeholder="Income Amount"
                {...register("amount", incomeConfig.amount)}
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
                placeholder="Source Detail"
                {...register("detail", incomeConfig.detail)}
              />
              {errors?.detail && <p>{errors.detail.message}</p>}
            </div>

            <div className="addIncome__button">
              <Button type="submit" theme="button">
                ADD
              </Button>
            </div>
          </form>
        </div>
        <div className="incomeList__section">
          <h1 className="incomeList__title">
            {userInfo?.data.username}&apos;s Income Records
          </h1>
          {loading && <Spinner />}
          {incomes?.data?.length === 0 ? (
            <p>No list yet</p>
          ) : (
            <>
              {!loading &&
                incomes &&
                incomes?.data?.map((item) => {
                  return (
                    <CardTile
                      key={item.id}
                      id={item.id}
                      amount={item.amount}
                      detail={item.detail}
                      date={item.created_at}
                      handleDelete={handleDeleteIncome}
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

export default Income;
