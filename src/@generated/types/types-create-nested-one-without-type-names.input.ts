import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutType_namesInput } from './types-create-without-type-names.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutType_namesInput } from './types-create-or-connect-without-type-names.input';
import { typesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class typesCreateNestedOneWithoutType_namesInput {

    @Field(() => typesCreateWithoutType_namesInput, {nullable:true})
    @Type(() => typesCreateWithoutType_namesInput)
    create?: typesCreateWithoutType_namesInput;

    @Field(() => typesCreateOrConnectWithoutType_namesInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutType_namesInput)
    connectOrCreate?: typesCreateOrConnectWithoutType_namesInput;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;
}
