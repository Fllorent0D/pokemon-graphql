import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutPokemon_itemsInput } from './versions-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutPokemon_itemsInput } from './versions-create-or-connect-without-pokemon-items.input';
import { versionsUpsertWithoutPokemon_itemsInput } from './versions-upsert-without-pokemon-items.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { versionsUpdateWithoutPokemon_itemsInput } from './versions-update-without-pokemon-items.input';

@InputType()
export class versionsUpdateOneRequiredWithoutPokemon_itemsNestedInput {

    @Field(() => versionsCreateWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => versionsCreateWithoutPokemon_itemsInput)
    create?: versionsCreateWithoutPokemon_itemsInput;

    @Field(() => versionsCreateOrConnectWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutPokemon_itemsInput)
    connectOrCreate?: versionsCreateOrConnectWithoutPokemon_itemsInput;

    @Field(() => versionsUpsertWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => versionsUpsertWithoutPokemon_itemsInput)
    upsert?: versionsUpsertWithoutPokemon_itemsInput;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: versionsWhereUniqueInput;

    @Field(() => versionsUpdateWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => versionsUpdateWithoutPokemon_itemsInput)
    update?: versionsUpdateWithoutPokemon_itemsInput;
}
