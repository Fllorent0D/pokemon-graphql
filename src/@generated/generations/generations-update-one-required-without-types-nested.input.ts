import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutTypesInput } from './generations-create-without-types.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutTypesInput } from './generations-create-or-connect-without-types.input';
import { generationsUpsertWithoutTypesInput } from './generations-upsert-without-types.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithoutTypesInput } from './generations-update-without-types.input';

@InputType()
export class generationsUpdateOneRequiredWithoutTypesNestedInput {

    @Field(() => generationsCreateWithoutTypesInput, {nullable:true})
    @Type(() => generationsCreateWithoutTypesInput)
    create?: generationsCreateWithoutTypesInput;

    @Field(() => generationsCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutTypesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutTypesInput;

    @Field(() => generationsUpsertWithoutTypesInput, {nullable:true})
    @Type(() => generationsUpsertWithoutTypesInput)
    upsert?: generationsUpsertWithoutTypesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutTypesInput, {nullable:true})
    @Type(() => generationsUpdateWithoutTypesInput)
    update?: generationsUpdateWithoutTypesInput;
}
