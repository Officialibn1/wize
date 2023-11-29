import React from "react";
import "@/app/components/styles/Disclaimer.css";

const Disclaimer = () => {
	return (
		<div className='disclaimer'>
			<p>
				Past performance, whether actual or indicated by historical tests of
				strategies, is no guarantee of future performance or success. There is a
				possibility that one may sustain a loss equal to or greater than their
				entire investment regardless of which asset class they trade (equities,
				options, futures, or cryptocurrencies); therefore, it is advised not to
				invest or risk money that cannot be afforded to lose. Online trading is
				not suitable for all individuals. Please review the document titled
				Characteristics and Risks of Standardized Options. Before trading any
				asset class, individuals must read the relevant risk disclosure
				statements on the Other Information page. System access and trade
				placement and execution may be delayed or fail due to market volatility
				and volume, quote delays, system and software errors, Internet traffic,
				outages, and other factors.
			</p>

			<p>
				Securities and futures trading is offered to self-directed individuals
				by Wize Investment Inc., a broker-dealer registered with the Securities
				and Exchange Commission (SEC) and a futures commission merchant licensed
				with the Commodity Futures Trading Commission (CFTC). Wize Investment
				Inc. is a member of the Financial Industry Regulatory Authority (FINRA),
				the National Futures Association (NFA), and the following exchanges:{" "}
				<span>
					Cboe BYX Exchange, Inc., Cboe BZX Exchange, Inc., Cboe EDGA Exchange,
					Inc., Cboe EDGX Exchange, Inc., the Chicago Board of Trade (CBOT), the
					Chicago Mercantile Exchange, Inc. (CME), the Commodity Exchange, Inc.
					(COMEX), Eurex, ICE Futures U.S., ICE Futures Europe, the Investors
					Exchange LLC (IEX), the New York Mercantile Exchange, Inc. (NYMEX),
					Nasdaq BX, Inc., the Nasdaq Stock Market, the New York Stock Exchange
					(NYSE), NYSE Arca Equities, and NYSE American LLC.
				</span>
			</p>

			<p className='text-red-300'>
				Note: This information is provided for practice purposes only and does
				not represent a real platform or trading environment.
			</p>
		</div>
	);
};

export default Disclaimer;
