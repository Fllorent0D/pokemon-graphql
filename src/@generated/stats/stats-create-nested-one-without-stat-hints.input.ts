import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutStat_hintsInput } from './stats-create-without-stat-hints.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutStat_hintsInput } from './stats-create-or-connect-without-stat-hints.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class statsCreateNestedOneWithoutStat_hintsInput {

    @Field(() => statsCreateWithoutStat_hintsInput, {nullable:true})
    @Type(() => statsCreateWithoutStat_hintsInput)
    create?: statsCreateWithoutStat_hintsInput;

    @Field(() => statsCreateOrConnectWithoutStat_hintsInput, {nullable:true})
    @Type(() => statsCreateOrConnectWithoutStat_hintsInput)
    connectOrCreate?: statsCreateOrConnectWithoutStat_hintsInput;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: statsWhereUniqueInput;
}
