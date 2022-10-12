import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokedex_proseInput } from './languages-update-without-pokedex-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokedex_proseInput } from './languages-create-without-pokedex-prose.input';

@InputType()
export class languagesUpsertWithoutPokedex_proseInput {

    @Field(() => languagesUpdateWithoutPokedex_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokedex_proseInput)
    update!: languagesUpdateWithoutPokedex_proseInput;

    @Field(() => languagesCreateWithoutPokedex_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokedex_proseInput)
    create!: languagesCreateWithoutPokedex_proseInput;
}
