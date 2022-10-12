import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Move_meta_ailmentsRelationFilter } from '../prisma/move-meta-ailments-relation-filter.input';

@InputType()
export class move_meta_ailment_namesWhereInput {

    @Field(() => [move_meta_ailment_namesWhereInput], {nullable:true})
    AND?: Array<move_meta_ailment_namesWhereInput>;

    @Field(() => [move_meta_ailment_namesWhereInput], {nullable:true})
    OR?: Array<move_meta_ailment_namesWhereInput>;

    @Field(() => [move_meta_ailment_namesWhereInput], {nullable:true})
    NOT?: Array<move_meta_ailment_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_meta_ailment_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Move_meta_ailmentsRelationFilter, {nullable:true})
    move_meta_ailments?: Move_meta_ailmentsRelationFilter;
}
