import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailment_namesWhereUniqueInput } from '../move-meta-ailment-names/move-meta-ailment-names-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesCreateInput } from '../move-meta-ailment-names/move-meta-ailment-names-create.input';
import { move_meta_ailment_namesUpdateInput } from '../move-meta-ailment-names/move-meta-ailment-names-update.input';

@ArgsType()
export class UpsertOnemoveMetaAilmentNamesArgs {

    @Field(() => move_meta_ailment_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    where!: move_meta_ailment_namesWhereUniqueInput;

    @Field(() => move_meta_ailment_namesCreateInput, {nullable:false})
    @Type(() => move_meta_ailment_namesCreateInput)
    create!: move_meta_ailment_namesCreateInput;

    @Field(() => move_meta_ailment_namesUpdateInput, {nullable:false})
    @Type(() => move_meta_ailment_namesUpdateInput)
    update!: move_meta_ailment_namesUpdateInput;
}
