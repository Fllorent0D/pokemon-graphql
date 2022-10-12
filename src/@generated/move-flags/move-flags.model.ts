import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { move_flag_map } from '../move-flag-map/move-flag-map.model';
import { move_flag_prose } from '../move-flag-prose/move-flag-prose.model';
import { Move_flagsCount } from '../prisma/move-flags-count.output';

@ObjectType()
export class move_flags {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [move_flag_map], {nullable:true})
    move_flag_map?: Array<move_flag_map>;

    @Field(() => [move_flag_prose], {nullable:true})
    move_flag_prose?: Array<move_flag_prose>;

    @Field(() => Move_flagsCount, {nullable:false})
    _count?: Move_flagsCount;
}
