import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class pokemon_egg_groupsScalarWhereInput {

    @Field(() => [pokemon_egg_groupsScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_egg_groupsScalarWhereInput>;

    @Field(() => [pokemon_egg_groupsScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_egg_groupsScalarWhereInput>;

    @Field(() => [pokemon_egg_groupsScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_egg_groupsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    egg_group_id?: IntFilter;
}
