import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesCreateWithoutLanguagesInput } from './stat-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { stat_namesCreateOrConnectWithoutLanguagesInput } from './stat-names-create-or-connect-without-languages.input';
import { stat_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './stat-names-upsert-with-where-unique-without-languages.input';
import { stat_namesWhereUniqueInput } from './stat-names-where-unique.input';
import { stat_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './stat-names-update-with-where-unique-without-languages.input';
import { stat_namesUpdateManyWithWhereWithoutLanguagesInput } from './stat-names-update-many-with-where-without-languages.input';
import { stat_namesScalarWhereInput } from './stat-names-scalar-where.input';

@InputType()
export class stat_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [stat_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_namesCreateWithoutLanguagesInput)
    create?: Array<stat_namesCreateWithoutLanguagesInput>;

    @Field(() => [stat_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<stat_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [stat_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<stat_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    set?: Array<stat_namesWhereUniqueInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    disconnect?: Array<stat_namesWhereUniqueInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    delete?: Array<stat_namesWhereUniqueInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    connect?: Array<stat_namesWhereUniqueInput>;

    @Field(() => [stat_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<stat_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [stat_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<stat_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [stat_namesScalarWhereInput], {nullable:true})
    @Type(() => stat_namesScalarWhereInput)
    deleteMany?: Array<stat_namesScalarWhereInput>;
}
