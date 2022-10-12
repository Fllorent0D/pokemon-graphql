import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsUpdateWithoutGeneration_namesInput } from './generations-update-without-generation-names.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutGeneration_namesInput } from './generations-create-without-generation-names.input';

@InputType()
export class generationsUpsertWithoutGeneration_namesInput {

    @Field(() => generationsUpdateWithoutGeneration_namesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutGeneration_namesInput)
    update!: generationsUpdateWithoutGeneration_namesInput;

    @Field(() => generationsCreateWithoutGeneration_namesInput, {nullable:false})
    @Type(() => generationsCreateWithoutGeneration_namesInput)
    create!: generationsCreateWithoutGeneration_namesInput;
}
