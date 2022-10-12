import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class move_flavor_textScalarWhereInput {

    @Field(() => [move_flavor_textScalarWhereInput], {nullable:true})
    AND?: Array<move_flavor_textScalarWhereInput>;

    @Field(() => [move_flavor_textScalarWhereInput], {nullable:true})
    OR?: Array<move_flavor_textScalarWhereInput>;

    @Field(() => [move_flavor_textScalarWhereInput], {nullable:true})
    NOT?: Array<move_flavor_textScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    flavor_text?: StringFilter;
}
