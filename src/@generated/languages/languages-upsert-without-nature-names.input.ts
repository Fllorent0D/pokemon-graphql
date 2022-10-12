import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutNature_namesInput } from './languages-update-without-nature-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutNature_namesInput } from './languages-create-without-nature-names.input';

@InputType()
export class languagesUpsertWithoutNature_namesInput {

    @Field(() => languagesUpdateWithoutNature_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutNature_namesInput)
    update!: languagesUpdateWithoutNature_namesInput;

    @Field(() => languagesCreateWithoutNature_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutNature_namesInput)
    create!: languagesCreateWithoutNature_namesInput;
}
