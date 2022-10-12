import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesCreateWithoutLanguagesInput } from './generation-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { generation_namesCreateOrConnectWithoutLanguagesInput } from './generation-names-create-or-connect-without-languages.input';
import { generation_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './generation-names-upsert-with-where-unique-without-languages.input';
import { generation_namesWhereUniqueInput } from './generation-names-where-unique.input';
import { generation_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './generation-names-update-with-where-unique-without-languages.input';
import { generation_namesUpdateManyWithWhereWithoutLanguagesInput } from './generation-names-update-many-with-where-without-languages.input';
import { generation_namesScalarWhereInput } from './generation-names-scalar-where.input';

@InputType()
export class generation_namesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [generation_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => generation_namesCreateWithoutLanguagesInput)
    create?: Array<generation_namesCreateWithoutLanguagesInput>;

    @Field(() => [generation_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => generation_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<generation_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [generation_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => generation_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<generation_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    set?: Array<generation_namesWhereUniqueInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    disconnect?: Array<generation_namesWhereUniqueInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    delete?: Array<generation_namesWhereUniqueInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    connect?: Array<generation_namesWhereUniqueInput>;

    @Field(() => [generation_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => generation_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<generation_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [generation_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => generation_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<generation_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [generation_namesScalarWhereInput], {nullable:true})
    @Type(() => generation_namesScalarWhereInput)
    deleteMany?: Array<generation_namesScalarWhereInput>;
}
