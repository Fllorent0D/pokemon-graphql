import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsCreateWithoutItemsInput } from './pokemon-items-create-without-items.input';
import { Type } from 'class-transformer';
import { pokemon_itemsCreateOrConnectWithoutItemsInput } from './pokemon-items-create-or-connect-without-items.input';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';

@InputType()
export class pokemon_itemsCreateNestedManyWithoutItemsInput {

    @Field(() => [pokemon_itemsCreateWithoutItemsInput], {nullable:true})
    @Type(() => pokemon_itemsCreateWithoutItemsInput)
    create?: Array<pokemon_itemsCreateWithoutItemsInput>;

    @Field(() => [pokemon_itemsCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => pokemon_itemsCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<pokemon_itemsCreateOrConnectWithoutItemsInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    connect?: Array<pokemon_itemsWhereUniqueInput>;
}
