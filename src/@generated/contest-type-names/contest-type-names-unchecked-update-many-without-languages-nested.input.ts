import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_type_namesCreateWithoutLanguagesInput } from './contest-type-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { contest_type_namesCreateOrConnectWithoutLanguagesInput } from './contest-type-names-create-or-connect-without-languages.input';
import { contest_type_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './contest-type-names-upsert-with-where-unique-without-languages.input';
import { contest_type_namesWhereUniqueInput } from './contest-type-names-where-unique.input';
import { contest_type_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './contest-type-names-update-with-where-unique-without-languages.input';
import { contest_type_namesUpdateManyWithWhereWithoutLanguagesInput } from './contest-type-names-update-many-with-where-without-languages.input';
import { contest_type_namesScalarWhereInput } from './contest-type-names-scalar-where.input';

@InputType()
export class contest_type_namesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [contest_type_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_type_namesCreateWithoutLanguagesInput)
    create?: Array<contest_type_namesCreateWithoutLanguagesInput>;

    @Field(() => [contest_type_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_type_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<contest_type_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [contest_type_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_type_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<contest_type_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    set?: Array<contest_type_namesWhereUniqueInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    disconnect?: Array<contest_type_namesWhereUniqueInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    delete?: Array<contest_type_namesWhereUniqueInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    connect?: Array<contest_type_namesWhereUniqueInput>;

    @Field(() => [contest_type_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_type_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<contest_type_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [contest_type_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_type_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<contest_type_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [contest_type_namesScalarWhereInput], {nullable:true})
    @Type(() => contest_type_namesScalarWhereInput)
    deleteMany?: Array<contest_type_namesScalarWhereInput>;
}
