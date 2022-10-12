import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutStat_namesInput } from './stats-create-without-stat-names.input';

@InputType()
export class statsCreateOrConnectWithoutStat_namesInput {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;

    @Field(() => statsCreateWithoutStat_namesInput, {nullable:false})
    @Type(() => statsCreateWithoutStat_namesInput)
    create!: statsCreateWithoutStat_namesInput;
}
