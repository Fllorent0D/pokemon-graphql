import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesCreateWithoutStatsInput } from './stat-names-create-without-stats.input';
import { Type } from 'class-transformer';
import { stat_namesCreateOrConnectWithoutStatsInput } from './stat-names-create-or-connect-without-stats.input';
import { stat_namesWhereUniqueInput } from './stat-names-where-unique.input';

@InputType()
export class stat_namesUncheckedCreateNestedManyWithoutStatsInput {

    @Field(() => [stat_namesCreateWithoutStatsInput], {nullable:true})
    @Type(() => stat_namesCreateWithoutStatsInput)
    create?: Array<stat_namesCreateWithoutStatsInput>;

    @Field(() => [stat_namesCreateOrConnectWithoutStatsInput], {nullable:true})
    @Type(() => stat_namesCreateOrConnectWithoutStatsInput)
    connectOrCreate?: Array<stat_namesCreateOrConnectWithoutStatsInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    connect?: Array<stat_namesWhereUniqueInput>;
}
