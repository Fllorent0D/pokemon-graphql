import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesCreateWithoutLanguagesInput } from './stat-hint-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { stat_hint_namesCreateOrConnectWithoutLanguagesInput } from './stat-hint-names-create-or-connect-without-languages.input';
import { stat_hint_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './stat-hint-names-upsert-with-where-unique-without-languages.input';
import { stat_hint_namesWhereUniqueInput } from './stat-hint-names-where-unique.input';
import { stat_hint_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './stat-hint-names-update-with-where-unique-without-languages.input';
import { stat_hint_namesUpdateManyWithWhereWithoutLanguagesInput } from './stat-hint-names-update-many-with-where-without-languages.input';
import { stat_hint_namesScalarWhereInput } from './stat-hint-names-scalar-where.input';

@InputType()
export class stat_hint_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [stat_hint_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_hint_namesCreateWithoutLanguagesInput)
    create?: Array<stat_hint_namesCreateWithoutLanguagesInput>;

    @Field(() => [stat_hint_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_hint_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<stat_hint_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [stat_hint_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_hint_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<stat_hint_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

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

    @Field(() => [stat_hint_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_hint_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<stat_hint_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [stat_hint_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_hint_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<stat_hint_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [stat_hint_namesScalarWhereInput], {nullable:true})
    @Type(() => stat_hint_namesScalarWhereInput)
    deleteMany?: Array<stat_hint_namesScalarWhereInput>;
}
