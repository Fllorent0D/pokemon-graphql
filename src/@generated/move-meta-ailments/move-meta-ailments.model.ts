import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { move_meta } from '../move-meta/move-meta.model';
import { move_meta_ailment_names } from '../move-meta-ailment-names/move-meta-ailment-names.model';
import { Move_meta_ailmentsCount } from '../prisma/move-meta-ailments-count.output';

@ObjectType()
export class move_meta_ailments {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [move_meta], {nullable:true})
    move_meta?: Array<move_meta>;

    @Field(() => [move_meta_ailment_names], {nullable:true})
    move_meta_ailment_names?: Array<move_meta_ailment_names>;

    @Field(() => Move_meta_ailmentsCount, {nullable:false})
    _count?: Move_meta_ailmentsCount;
}
