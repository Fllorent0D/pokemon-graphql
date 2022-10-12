import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsCreateWithoutStatsInput } from './stat-hints-create-without-stats.input';
import { Type } from 'class-transformer';
import { stat_hintsCreateOrConnectWithoutStatsInput } from './stat-hints-create-or-connect-without-stats.input';
import { stat_hintsWhereUniqueInput } from './stat-hints-where-unique.input';

@InputType()
export class stat_hintsCreateNestedManyWithoutStatsInput {

    @Field(() => [stat_hintsCreateWithoutStatsInput], {nullable:true})
    @Type(() => stat_hintsCreateWithoutStatsInput)
    create?: Array<stat_hintsCreateWithoutStatsInput>;

    @Field(() => [stat_hintsCreateOrConnectWithoutStatsInput], {nullable:true})
    @Type(() => stat_hintsCreateOrConnectWithoutStatsInput)
    connectOrCreate?: Array<stat_hintsCreateOrConnectWithoutStatsInput>;

    @Field(() => [stat_hintsWhereUniqueInput], {nullable:true})
    @Type(() => stat_hintsWhereUniqueInput)
    connect?: Array<stat_hintsWhereUniqueInput>;
}
