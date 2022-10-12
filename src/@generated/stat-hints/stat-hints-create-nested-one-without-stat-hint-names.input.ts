import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsCreateWithoutStat_hint_namesInput } from './stat-hints-create-without-stat-hint-names.input';
import { Type } from 'class-transformer';
import { stat_hintsCreateOrConnectWithoutStat_hint_namesInput } from './stat-hints-create-or-connect-without-stat-hint-names.input';
import { stat_hintsWhereUniqueInput } from './stat-hints-where-unique.input';

@InputType()
export class stat_hintsCreateNestedOneWithoutStat_hint_namesInput {

    @Field(() => stat_hintsCreateWithoutStat_hint_namesInput, {nullable:true})
    @Type(() => stat_hintsCreateWithoutStat_hint_namesInput)
    create?: stat_hintsCreateWithoutStat_hint_namesInput;

    @Field(() => stat_hintsCreateOrConnectWithoutStat_hint_namesInput, {nullable:true})
    @Type(() => stat_hintsCreateOrConnectWithoutStat_hint_namesInput)
    connectOrCreate?: stat_hintsCreateOrConnectWithoutStat_hint_namesInput;

    @Field(() => stat_hintsWhereUniqueInput, {nullable:true})
    @Type(() => stat_hintsWhereUniqueInput)
    connect?: stat_hintsWhereUniqueInput;
}
