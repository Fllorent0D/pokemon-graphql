import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class pokedexesScalarWhereInput {

    @Field(() => [pokedexesScalarWhereInput], {nullable:true})
    AND?: Array<pokedexesScalarWhereInput>;

    @Field(() => [pokedexesScalarWhereInput], {nullable:true})
    OR?: Array<pokedexesScalarWhereInput>;

    @Field(() => [pokedexesScalarWhereInput], {nullable:true})
    NOT?: Array<pokedexesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    region_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;
}
