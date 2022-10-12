import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutStat_namesInput } from './stats-create-without-stat-names.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutStat_namesInput } from './stats-create-or-connect-without-stat-names.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class statsCreateNestedOneWithoutStat_namesInput {

    @Field(() => statsCreateWithoutStat_namesInput, {nullable:true})
    @Type(() => statsCreateWithoutStat_namesInput)
    create?: statsCreateWithoutStat_namesInput;

    @Field(() => statsCreateOrConnectWithoutStat_namesInput, {nullable:true})
    @Type(() => statsCreateOrConnectWithoutStat_namesInput)
    connectOrCreate?: statsCreateOrConnectWithoutStat_namesInput;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: statsWhereUniqueInput;
}
