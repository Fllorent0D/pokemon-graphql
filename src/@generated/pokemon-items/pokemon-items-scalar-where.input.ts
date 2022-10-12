import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class pokemon_itemsScalarWhereInput {

    @Field(() => [pokemon_itemsScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_itemsScalarWhereInput>;

    @Field(() => [pokemon_itemsScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_itemsScalarWhereInput>;

    @Field(() => [pokemon_itemsScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_itemsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    rarity?: IntFilter;
}
