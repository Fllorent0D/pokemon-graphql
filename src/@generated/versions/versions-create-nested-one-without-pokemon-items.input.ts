import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutPokemon_itemsInput } from './versions-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutPokemon_itemsInput } from './versions-create-or-connect-without-pokemon-items.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class versionsCreateNestedOneWithoutPokemon_itemsInput {

    @Field(() => versionsCreateWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => versionsCreateWithoutPokemon_itemsInput)
    create?: versionsCreateWithoutPokemon_itemsInput;

    @Field(() => versionsCreateOrConnectWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutPokemon_itemsInput)
    connectOrCreate?: versionsCreateOrConnectWithoutPokemon_itemsInput;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: versionsWhereUniqueInput;
}
