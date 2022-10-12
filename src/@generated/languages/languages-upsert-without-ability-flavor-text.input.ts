import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutAbility_flavor_textInput } from './languages-update-without-ability-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutAbility_flavor_textInput } from './languages-create-without-ability-flavor-text.input';

@InputType()
export class languagesUpsertWithoutAbility_flavor_textInput {

    @Field(() => languagesUpdateWithoutAbility_flavor_textInput, {nullable:false})
    @Type(() => languagesUpdateWithoutAbility_flavor_textInput)
    update!: languagesUpdateWithoutAbility_flavor_textInput;

    @Field(() => languagesCreateWithoutAbility_flavor_textInput, {nullable:false})
    @Type(() => languagesCreateWithoutAbility_flavor_textInput)
    create!: languagesCreateWithoutAbility_flavor_textInput;
}
