import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class pokemon_abilitiesScalarWhereInput {

    @Field(() => [pokemon_abilitiesScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_abilitiesScalarWhereInput>;

    @Field(() => [pokemon_abilitiesScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_abilitiesScalarWhereInput>;

    @Field(() => [pokemon_abilitiesScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_abilitiesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_dream?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    slot?: IntFilter;
}
