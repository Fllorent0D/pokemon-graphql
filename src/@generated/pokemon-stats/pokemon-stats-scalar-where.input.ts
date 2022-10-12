import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class pokemon_statsScalarWhereInput {

    @Field(() => [pokemon_statsScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_statsScalarWhereInput>;

    @Field(() => [pokemon_statsScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_statsScalarWhereInput>;

    @Field(() => [pokemon_statsScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_statsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_stat?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effort?: IntFilter;
}
