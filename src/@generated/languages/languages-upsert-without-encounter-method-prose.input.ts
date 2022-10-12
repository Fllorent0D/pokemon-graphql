import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutEncounter_method_proseInput } from './languages-update-without-encounter-method-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutEncounter_method_proseInput } from './languages-create-without-encounter-method-prose.input';

@InputType()
export class languagesUpsertWithoutEncounter_method_proseInput {

    @Field(() => languagesUpdateWithoutEncounter_method_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutEncounter_method_proseInput)
    update!: languagesUpdateWithoutEncounter_method_proseInput;

    @Field(() => languagesCreateWithoutEncounter_method_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutEncounter_method_proseInput)
    create!: languagesCreateWithoutEncounter_method_proseInput;
}
