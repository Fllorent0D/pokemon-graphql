import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesCreateWithoutStat_hintsInput } from './stat-hint-names-create-without-stat-hints.input';
import { Type } from 'class-transformer';
import { stat_hint_namesCreateOrConnectWithoutStat_hintsInput } from './stat-hint-names-create-or-connect-without-stat-hints.input';
import { stat_hint_namesWhereUniqueInput } from './stat-hint-names-where-unique.input';

@InputType()
export class stat_hint_namesCreateNestedManyWithoutStat_hintsInput {

    @Field(() => [stat_hint_namesCreateWithoutStat_hintsInput], {nullable:true})
    @Type(() => stat_hint_namesCreateWithoutStat_hintsInput)
    create?: Array<stat_hint_namesCreateWithoutStat_hintsInput>;

    @Field(() => [stat_hint_namesCreateOrConnectWithoutStat_hintsInput], {nullable:true})
    @Type(() => stat_hint_namesCreateOrConnectWithoutStat_hintsInput)
    connectOrCreate?: Array<stat_hint_namesCreateOrConnectWithoutStat_hintsInput>;

    @Field(() => [stat_hint_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_hint_namesWhereUniqueInput)
    connect?: Array<stat_hint_namesWhereUniqueInput>;
}
