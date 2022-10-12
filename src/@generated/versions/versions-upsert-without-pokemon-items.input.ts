import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsUpdateWithoutPokemon_itemsInput } from './versions-update-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutPokemon_itemsInput } from './versions-create-without-pokemon-items.input';

@InputType()
export class versionsUpsertWithoutPokemon_itemsInput {

    @Field(() => versionsUpdateWithoutPokemon_itemsInput, {nullable:false})
    @Type(() => versionsUpdateWithoutPokemon_itemsInput)
    update!: versionsUpdateWithoutPokemon_itemsInput;

    @Field(() => versionsCreateWithoutPokemon_itemsInput, {nullable:false})
    @Type(() => versionsCreateWithoutPokemon_itemsInput)
    create!: versionsCreateWithoutPokemon_itemsInput;
}
