import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class location_areasScalarWhereInput {

    @Field(() => [location_areasScalarWhereInput], {nullable:true})
    AND?: Array<location_areasScalarWhereInput>;

    @Field(() => [location_areasScalarWhereInput], {nullable:true})
    OR?: Array<location_areasScalarWhereInput>;

    @Field(() => [location_areasScalarWhereInput], {nullable:true})
    NOT?: Array<location_areasScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    location_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    identifier?: StringNullableFilter;
}
