import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutAbility_namesInput } from './languages-update-without-ability-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutAbility_namesInput } from './languages-create-without-ability-names.input';

@InputType()
export class languagesUpsertWithoutAbility_namesInput {

    @Field(() => languagesUpdateWithoutAbility_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutAbility_namesInput)
    update!: languagesUpdateWithoutAbility_namesInput;

    @Field(() => languagesCreateWithoutAbility_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutAbility_namesInput)
    create!: languagesCreateWithoutAbility_namesInput;
}
