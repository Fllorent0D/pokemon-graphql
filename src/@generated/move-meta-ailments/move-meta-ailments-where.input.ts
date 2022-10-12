import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Move_metaListRelationFilter } from '../prisma/move-meta-list-relation-filter.input';
import { Move_meta_ailment_namesListRelationFilter } from '../prisma/move-meta-ailment-names-list-relation-filter.input';

@InputType()
export class move_meta_ailmentsWhereInput {

    @Field(() => [move_meta_ailmentsWhereInput], {nullable:true})
    AND?: Array<move_meta_ailmentsWhereInput>;

    @Field(() => [move_meta_ailmentsWhereInput], {nullable:true})
    OR?: Array<move_meta_ailmentsWhereInput>;

    @Field(() => [move_meta_ailmentsWhereInput], {nullable:true})
    NOT?: Array<move_meta_ailmentsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Move_metaListRelationFilter, {nullable:true})
    move_meta?: Move_metaListRelationFilter;

    @Field(() => Move_meta_ailment_namesListRelationFilter, {nullable:true})
    move_meta_ailment_names?: Move_meta_ailment_namesListRelationFilter;
}
