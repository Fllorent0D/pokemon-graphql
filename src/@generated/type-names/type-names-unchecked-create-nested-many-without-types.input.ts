import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesCreateWithoutTypesInput } from './type-names-create-without-types.input';
import { Type } from 'class-transformer';
import { type_namesCreateOrConnectWithoutTypesInput } from './type-names-create-or-connect-without-types.input';
import { type_namesWhereUniqueInput } from './type-names-where-unique.input';

@InputType()
export class type_namesUncheckedCreateNestedManyWithoutTypesInput {

    @Field(() => [type_namesCreateWithoutTypesInput], {nullable:true})
    @Type(() => type_namesCreateWithoutTypesInput)
    create?: Array<type_namesCreateWithoutTypesInput>;

    @Field(() => [type_namesCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => type_namesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<type_namesCreateOrConnectWithoutTypesInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    connect?: Array<type_namesWhereUniqueInput>;
}
