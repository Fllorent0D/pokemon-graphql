import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutEvolution_trigger_proseInput } from './languages-update-without-evolution-trigger-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutEvolution_trigger_proseInput } from './languages-create-without-evolution-trigger-prose.input';

@InputType()
export class languagesUpsertWithoutEvolution_trigger_proseInput {

    @Field(() => languagesUpdateWithoutEvolution_trigger_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutEvolution_trigger_proseInput)
    update!: languagesUpdateWithoutEvolution_trigger_proseInput;

    @Field(() => languagesCreateWithoutEvolution_trigger_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutEvolution_trigger_proseInput)
    create!: languagesCreateWithoutEvolution_trigger_proseInput;
}
