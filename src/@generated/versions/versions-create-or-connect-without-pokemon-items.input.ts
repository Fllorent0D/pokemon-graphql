import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutPokemon_itemsInput } from './versions-create-without-pokemon-items.input';

@InputType()
export class versionsCreateOrConnectWithoutPokemon_itemsInput {

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;

    @Field(() => versionsCreateWithoutPokemon_itemsInput, {nullable:false})
    @Type(() => versionsCreateWithoutPokemon_itemsInput)
    create!: versionsCreateWithoutPokemon_itemsInput;
}
