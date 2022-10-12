import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutStat_hintsInput } from './stats-create-without-stat-hints.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutStat_hintsInput } from './stats-create-or-connect-without-stat-hints.input';
import { statsUpsertWithoutStat_hintsInput } from './stats-upsert-without-stat-hints.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { statsUpdateWithoutStat_hintsInput } from './stats-update-without-stat-hints.input';

@InputType()
export class statsUpdateOneRequiredWithoutStat_hintsNestedInput {

    @Field(() => statsCreateWithoutStat_hintsInput, {nullable:true})
    @Type(() => statsCreateWithoutStat_hintsInput)
    create?: statsCreateWithoutStat_hintsInput;

    @Field(() => statsCreateOrConnectWithoutStat_hintsInput, {nullable:true})
    @Type(() => statsCreateOrConnectWithoutStat_hintsInput)
    connectOrCreate?: statsCreateOrConnectWithoutStat_hintsInput;

    @Field(() => statsUpsertWithoutStat_hintsInput, {nullable:true})
    @Type(() => statsUpsertWithoutStat_hintsInput)
    upsert?: statsUpsertWithoutStat_hintsInput;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: statsWhereUniqueInput;

    @Field(() => statsUpdateWithoutStat_hintsInput, {nullable:true})
    @Type(() => statsUpdateWithoutStat_hintsInput)
    update?: statsUpdateWithoutStat_hintsInput;
}
