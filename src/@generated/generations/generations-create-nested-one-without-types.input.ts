import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutTypesInput } from './generations-create-without-types.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutTypesInput } from './generations-create-or-connect-without-types.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsCreateNestedOneWithoutTypesInput {

    @Field(() => generationsCreateWithoutTypesInput, {nullable:true})
    @Type(() => generationsCreateWithoutTypesInput)
    create?: generationsCreateWithoutTypesInput;

    @Field(() => generationsCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutTypesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutTypesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;
}
