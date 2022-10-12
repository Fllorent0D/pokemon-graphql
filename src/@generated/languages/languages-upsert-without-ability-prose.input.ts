import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutAbility_proseInput } from './languages-update-without-ability-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutAbility_proseInput } from './languages-create-without-ability-prose.input';

@InputType()
export class languagesUpsertWithoutAbility_proseInput {

    @Field(() => languagesUpdateWithoutAbility_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutAbility_proseInput)
    update!: languagesUpdateWithoutAbility_proseInput;

    @Field(() => languagesCreateWithoutAbility_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutAbility_proseInput)
    create!: languagesCreateWithoutAbility_proseInput;
}
