import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutGeneration_namesInput } from './generations-create-without-generation-names.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutGeneration_namesInput } from './generations-create-or-connect-without-generation-names.input';
import { generationsUpsertWithoutGeneration_namesInput } from './generations-upsert-without-generation-names.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithoutGeneration_namesInput } from './generations-update-without-generation-names.input';

@InputType()
export class generationsUpdateOneRequiredWithoutGeneration_namesNestedInput {

    @Field(() => generationsCreateWithoutGeneration_namesInput, {nullable:true})
    @Type(() => generationsCreateWithoutGeneration_namesInput)
    create?: generationsCreateWithoutGeneration_namesInput;

    @Field(() => generationsCreateOrConnectWithoutGeneration_namesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutGeneration_namesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutGeneration_namesInput;

    @Field(() => generationsUpsertWithoutGeneration_namesInput, {nullable:true})
    @Type(() => generationsUpsertWithoutGeneration_namesInput)
    upsert?: generationsUpsertWithoutGeneration_namesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutGeneration_namesInput, {nullable:true})
    @Type(() => generationsUpdateWithoutGeneration_namesInput)
    update?: generationsUpdateWithoutGeneration_namesInput;
}
