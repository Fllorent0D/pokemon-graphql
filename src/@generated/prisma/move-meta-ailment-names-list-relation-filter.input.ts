import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesWhereInput } from '../move-meta-ailment-names/move-meta-ailment-names-where.input';

@InputType()
export class Move_meta_ailment_namesListRelationFilter {

    @Field(() => move_meta_ailment_namesWhereInput, {nullable:true})
    every?: move_meta_ailment_namesWhereInput;

    @Field(() => move_meta_ailment_namesWhereInput, {nullable:true})
    some?: move_meta_ailment_namesWhereInput;

    @Field(() => move_meta_ailment_namesWhereInput, {nullable:true})
    none?: move_meta_ailment_namesWhereInput;
}
