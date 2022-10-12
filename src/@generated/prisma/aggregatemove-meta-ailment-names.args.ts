import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailment_namesWhereInput } from '../move-meta-ailment-names/move-meta-ailment-names-where.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesOrderByWithRelationInput } from '../move-meta-ailment-names/move-meta-ailment-names-order-by-with-relation.input';
import { move_meta_ailment_namesWhereUniqueInput } from '../move-meta-ailment-names/move-meta-ailment-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveMetaAilmentNamesArgs {

    @Field(() => move_meta_ailment_namesWhereInput, {nullable:true})
    @Type(() => move_meta_ailment_namesWhereInput)
    where?: move_meta_ailment_namesWhereInput;

    @Field(() => [move_meta_ailment_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_meta_ailment_namesOrderByWithRelationInput>;

    @Field(() => move_meta_ailment_namesWhereUniqueInput, {nullable:true})
    cursor?: move_meta_ailment_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
