import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesCreateWithoutStat_hintsInput } from './stat-hint-names-create-without-stat-hints.input';
import { Type } from 'class-transformer';
import { stat_hint_namesCreateOrConnectWithoutStat_hintsInput } from './stat-hint-names-create-or-connect-without-stat-hints.input';
import { stat_hint_namesUpsertWithWhereUniqueWithoutStat_hintsInput } from './stat-hint-names-upsert-with-where-unique-without-stat-hints.input';
import { stat_hint_namesWhereUniqueInput } from './stat-hint-names-where-unique.input';
import { stat_hint_namesUpdateWithWhereUniqueWithoutStat_hintsInput } from './stat-hint-names-update-with-where-unique-without-stat-hints.input';
import { stat_hint_namesUpdateManyWithWhereWithoutStat_hintsInput } from './stat-hint-names-update-many-with-where-without-stat-hints.input';
import { stat_hint_namesScalarWhereInput } from './stat-hint-names-scalar-where.input';

@InputType()
export class stat_hint_namesUpdateManyWithoutStat_hintsNestedInput {

    @Field(() => [stat_hint_namesCreateWithoutStat_hintsInput], {nullable:true})
    @Type(() => stat_hint_namesCreateWithoutStat_hintsInput)
    create?: Array<stat_hint_namesCreateWithoutStat_hintsInput>;

    @Field(() => [stat_hint_namesCreateOrConnectWithoutStat_hintsInput], {nullable:true})
    @Type(() => stat_hint_namesCreateOrConnectWithoutStat_hintsInput)
    connectOrCreate?: Array<stat_hint_namesCreateOrConnectWithoutStat_hintsInput>;

    @Field(() => [stat_hint_namesUpsertWithWhereUniqueWithoutStat_hintsInput], {nullable:true})
    @Type(() => stat_hint_namesUpsertWithWhereUniqueWithoutStat_hintsInput)
    upsert?: Array<stat_hint_namesUpsertWithWhereUniqueWithoutStat_hintsInput>;

    @Field(() => [stat_hint_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_hint_namesWhereUniqueInput)
    set?: Array<stat_hint_namesWhereUniqueInput>;

    @Field(() => [stat_hint_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_hint_namesWhereUniqueInput)
    disconnect?: Array<stat_hint_namesWhereUniqueInput>;

    @Field(() => [stat_hint_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_hint_namesWhereUniqueInput)
    delete?: Array<stat_hint_namesWhereUniqueInput>;

    @Field(() => [stat_hint_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_hint_namesWhereUniqueInput)
    connect?: Array<stat_hint_namesWhereUniqueInput>;

    @Field(() => [stat_hint_namesUpdateWithWhereUniqueWithoutStat_hintsInput], {nullable:true})
    @Type(() => stat_hint_namesUpdateWithWhereUniqueWithoutStat_hintsInput)
    update?: Array<stat_hint_namesUpdateWithWhereUniqueWithoutStat_hintsInput>;

    @Field(() => [stat_hint_namesUpdateManyWithWhereWithoutStat_hintsInput], {nullable:true})
    @Type(() => stat_hint_namesUpdateManyWithWhereWithoutStat_hintsInput)
    updateMany?: Array<stat_hint_namesUpdateManyWithWhereWithoutStat_hintsInput>;

    @Field(() => [stat_hint_namesScalarWhereInput], {nullable:true})
    @Type(() => stat_hint_namesScalarWhereInput)
    deleteMany?: Array<stat_hint_namesScalarWhereInput>;
}
