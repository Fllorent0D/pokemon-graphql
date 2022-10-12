import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsCreateWithoutItemsInput } from './pokemon-items-create-without-items.input';
import { Type } from 'class-transformer';
import { pokemon_itemsCreateOrConnectWithoutItemsInput } from './pokemon-items-create-or-connect-without-items.input';
import { pokemon_itemsUpsertWithWhereUniqueWithoutItemsInput } from './pokemon-items-upsert-with-where-unique-without-items.input';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { pokemon_itemsUpdateWithWhereUniqueWithoutItemsInput } from './pokemon-items-update-with-where-unique-without-items.input';
import { pokemon_itemsUpdateManyWithWhereWithoutItemsInput } from './pokemon-items-update-many-with-where-without-items.input';
import { pokemon_itemsScalarWhereInput } from './pokemon-items-scalar-where.input';

@InputType()
export class pokemon_itemsUncheckedUpdateManyWithoutItemsNestedInput {

    @Field(() => [pokemon_itemsCreateWithoutItemsInput], {nullable:true})
    @Type(() => pokemon_itemsCreateWithoutItemsInput)
    create?: Array<pokemon_itemsCreateWithoutItemsInput>;

    @Field(() => [pokemon_itemsCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => pokemon_itemsCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<pokemon_itemsCreateOrConnectWithoutItemsInput>;

    @Field(() => [pokemon_itemsUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => pokemon_itemsUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<pokemon_itemsUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    set?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    disconnect?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    delete?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    connect?: Array<pokemon_itemsWhereUniqueInput>;

    @Field(() => [pokemon_itemsUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => pokemon_itemsUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<pokemon_itemsUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [pokemon_itemsUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => pokemon_itemsUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<pokemon_itemsUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [pokemon_itemsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_itemsScalarWhereInput)
    deleteMany?: Array<pokemon_itemsScalarWhereInput>;
}
