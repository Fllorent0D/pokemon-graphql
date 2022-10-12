import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutStat_hintsInput } from './stats-create-without-stat-hints.input';

@InputType()
export class statsCreateOrConnectWithoutStat_hintsInput {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;

    @Field(() => statsCreateWithoutStat_hintsInput, {nullable:false})
    @Type(() => statsCreateWithoutStat_hintsInput)
    create!: statsCreateWithoutStat_hintsInput;
}
