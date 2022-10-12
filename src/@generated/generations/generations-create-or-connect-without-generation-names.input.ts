import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutGeneration_namesInput } from './generations-create-without-generation-names.input';

@InputType()
export class generationsCreateOrConnectWithoutGeneration_namesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutGeneration_namesInput, {nullable:false})
    @Type(() => generationsCreateWithoutGeneration_namesInput)
    create!: generationsCreateWithoutGeneration_namesInput;
}
