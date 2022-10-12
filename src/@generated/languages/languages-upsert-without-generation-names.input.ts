import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutGeneration_namesInput } from './languages-update-without-generation-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutGeneration_namesInput } from './languages-create-without-generation-names.input';

@InputType()
export class languagesUpsertWithoutGeneration_namesInput {

    @Field(() => languagesUpdateWithoutGeneration_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutGeneration_namesInput)
    update!: languagesUpdateWithoutGeneration_namesInput;

    @Field(() => languagesCreateWithoutGeneration_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutGeneration_namesInput)
    create!: languagesCreateWithoutGeneration_namesInput;
}
