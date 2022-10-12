import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutType_namesInput } from './types-create-without-type-names.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutType_namesInput } from './types-create-or-connect-without-type-names.input';
import { typesUpsertWithoutType_namesInput } from './types-upsert-without-type-names.input';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { typesUpdateWithoutType_namesInput } from './types-update-without-type-names.input';

@InputType()
export class typesUpdateOneRequiredWithoutType_namesNestedInput {

    @Field(() => typesCreateWithoutType_namesInput, {nullable:true})
    @Type(() => typesCreateWithoutType_namesInput)
    create?: typesCreateWithoutType_namesInput;

    @Field(() => typesCreateOrConnectWithoutType_namesInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutType_namesInput)
    connectOrCreate?: typesCreateOrConnectWithoutType_namesInput;

    @Field(() => typesUpsertWithoutType_namesInput, {nullable:true})
    @Type(() => typesUpsertWithoutType_namesInput)
    upsert?: typesUpsertWithoutType_namesInput;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutType_namesInput, {nullable:true})
    @Type(() => typesUpdateWithoutType_namesInput)
    update?: typesUpdateWithoutType_namesInput;
}
