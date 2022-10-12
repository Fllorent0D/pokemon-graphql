import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesCreateWithoutLanguagesInput } from './type-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { type_namesCreateOrConnectWithoutLanguagesInput } from './type-names-create-or-connect-without-languages.input';
import { type_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './type-names-upsert-with-where-unique-without-languages.input';
import { type_namesWhereUniqueInput } from './type-names-where-unique.input';
import { type_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './type-names-update-with-where-unique-without-languages.input';
import { type_namesUpdateManyWithWhereWithoutLanguagesInput } from './type-names-update-many-with-where-without-languages.input';
import { type_namesScalarWhereInput } from './type-names-scalar-where.input';

@InputType()
export class type_namesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [type_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => type_namesCreateWithoutLanguagesInput)
    create?: Array<type_namesCreateWithoutLanguagesInput>;

    @Field(() => [type_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => type_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<type_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [type_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => type_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<type_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    set?: Array<type_namesWhereUniqueInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    disconnect?: Array<type_namesWhereUniqueInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    delete?: Array<type_namesWhereUniqueInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    connect?: Array<type_namesWhereUniqueInput>;

    @Field(() => [type_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => type_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<type_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [type_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => type_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<type_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [type_namesScalarWhereInput], {nullable:true})
    @Type(() => type_namesScalarWhereInput)
    deleteMany?: Array<type_namesScalarWhereInput>;
}
